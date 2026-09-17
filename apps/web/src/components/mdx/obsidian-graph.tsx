'use client'

import { cn } from '@simbashrd/utils'
import { useEffect, useRef } from 'react'

type GraphNode = {
  id: string
  label: string
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

type GraphEdge = {
  from: number
  to: number
}

type ObsidianGraphProps = {
  className?: string
  height?: number
}

const NODES_SEED: Array<{ id: string; label: string; hue: number }> = [
  { id: 'home', label: 'Home', hue: 265 },
  { id: 'arch', label: 'Architecture', hue: 250 },
  { id: 'tenants', label: 'Tenants', hue: 280 },
  { id: 'teams', label: 'Teams', hue: 275 },
  { id: 'vehicles', label: 'Vehicles', hue: 200 },
  { id: 'rents', label: 'Rents', hue: 195 },
  { id: 'billing', label: 'Billing', hue: 160 },
  { id: 'auth', label: 'Auth', hue: 320 },
  { id: 'stripe', label: 'Stripe', hue: 155 },
  { id: 'rbac', label: 'RBAC', hue: 300 },
  { id: 'clean', label: 'Clean Arch', hue: 240 },
  { id: 'tenancy', label: 'Tenancy', hue: 285 },
  { id: 'obsidian', label: 'Why Obsidian', hue: 45 }
]

const EDGES_SEED: Array<[string, string]> = [
  ['home', 'arch'],
  ['home', 'tenants'],
  ['home', 'auth'],
  ['arch', 'clean'],
  ['arch', 'tenancy'],
  ['tenants', 'teams'],
  ['tenants', 'tenancy'],
  ['teams', 'rbac'],
  ['vehicles', 'rents'],
  ['rents', 'billing'],
  ['billing', 'stripe'],
  ['auth', 'rbac'],
  ['stripe', 'arch'],
  ['clean', 'obsidian'],
  ['tenancy', 'rbac'],
  ['obsidian', 'home'],
  ['vehicles', 'tenants'],
  ['rents', 'teams']
]

const applyRepulsion = (nodes: GraphNode[]) => {
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]!
      const b = nodes[j]!
      let dx = b.x - a.x
      let dy = b.y - a.y
      const dist = Math.hypot(dx, dy) || 0.001
      const min = 56
      if (dist >= min) continue
      const force = ((min - dist) / min) * 0.08
      dx /= dist
      dy /= dist
      a.vx -= dx * force
      a.vy -= dy * force
      b.vx += dx * force
      b.vy += dy * force
    }
  }
}

const applySprings = (nodes: GraphNode[], edges: GraphEdge[]) => {
  for (const edge of edges) {
    const a = nodes[edge.from]!
    const b = nodes[edge.to]!
    const dx = b.x - a.x
    const dy = b.y - a.y
    const dist = Math.hypot(dx, dy) || 0.001
    const force = (dist - 90) * 0.004
    const fx = (dx / dist) * force
    const fy = (dy / dist) * force
    a.vx += fx
    a.vy += fy
    b.vx -= fx
    b.vy -= fy
  }
}

const integrateNodes = (
  nodes: GraphNode[],
  width: number,
  heightPx: number,
  cx: number,
  cy: number,
  time: number
) => {
  for (const node of nodes) {
    node.vx += (cx - node.x) * 0.0012
    node.vy += (cy - node.y) * 0.0012
    node.vx += Math.sin(time * 0.7 + node.x * 0.02) * 0.015
    node.vy += Math.cos(time * 0.6 + node.y * 0.02) * 0.015
    node.vx *= 0.92
    node.vy *= 0.92
    node.x = Math.min(width - 16, Math.max(16, node.x + node.vx))
    node.y = Math.min(heightPx - 16, Math.max(16, node.y + node.vy))
  }
}

const drawBackground = (
  ctx: CanvasRenderingContext2D,
  width: number,
  heightPx: number,
  cx: number,
  cy: number
) => {
  ctx.clearRect(0, 0, width, heightPx)
  const bg = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(width, heightPx) * 0.7)
  bg.addColorStop(0, 'rgba(42, 28, 64, 0.55)')
  bg.addColorStop(1, 'rgba(12, 10, 18, 0.92)')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, width, heightPx)

  ctx.fillStyle = 'rgba(180, 150, 255, 0.06)'
  for (let x = 12; x < width; x += 28) {
    for (let y = 12; y < heightPx; y += 28) {
      ctx.beginPath()
      ctx.arc(x, y, 0.8, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

const drawEdges = (
  ctx: CanvasRenderingContext2D,
  nodes: GraphNode[],
  edges: GraphEdge[],
  hover: number
) => {
  for (const edge of edges) {
    const a = nodes[edge.from]!
    const b = nodes[edge.to]!
    const active = hover === edge.from || hover === edge.to
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.strokeStyle = active ? 'rgba(196, 168, 255, 0.55)' : 'rgba(150, 130, 210, 0.22)'
    ctx.lineWidth = active ? 1.4 : 0.9
    ctx.stroke()
  }
}

const drawNodes = (
  ctx: CanvasRenderingContext2D,
  nodes: GraphNode[],
  hover: number,
  time: number
) => {
  for (const [i, node_] of nodes.entries()) {
    const node = node_
    const isHover = hover === i
    const pulse = 1 + Math.sin(time * 2.2 + i) * 0.08
    const r = node.r * pulse * (isHover ? 1.35 : 1)

    const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4)
    glow.addColorStop(0, `hsla(${node.hue}, 80%, 70%, ${isHover ? 0.45 : 0.22})`)
    glow.addColorStop(1, `hsla(${node.hue}, 80%, 70%, 0)`)
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fillStyle = `hsla(${node.hue}, 85%, ${isHover ? 78 : 68}%, 0.95)`
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'
    ctx.lineWidth = 1
    ctx.stroke()

    if (isHover || node.r >= 7) {
      ctx.font = '500 11px ui-sans-serif, system-ui, sans-serif'
      ctx.fillStyle = 'rgba(236, 230, 255, 0.9)'
      ctx.textAlign = 'center'
      ctx.fillText(node.label, node.x, node.y - r - 8)
    }
  }
}

const ObsidianGraph = (props: ObsidianGraphProps) => {
  const { className, height = 280 } = props
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let heightPx = 0
    let nodes: GraphNode[] = []
    let edges: GraphEdge[] = []
    let hover = -1
    let time = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      heightPx = height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(heightPx * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${heightPx}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (nodes.length === 0) {
        nodes = NODES_SEED.map((seed, i) => {
          const angle = (i / NODES_SEED.length) * Math.PI * 2
          const radius = Math.min(width, heightPx) * 0.28
          return {
            ...seed,
            x: width / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 24,
            y: heightPx / 2 + Math.sin(angle) * radius + (Math.random() - 0.5) * 24,
            vx: 0,
            vy: 0,
            r: seed.id === 'home' || seed.id === 'arch' ? 7 : 4.5
          }
        })
        const indexById = Object.fromEntries(nodes.map((n, i) => [n.id, i]))
        edges = EDGES_SEED.map(([from, to]) => ({
          from: indexById[from]!,
          to: indexById[to]!
        }))
      }
    }

    const step = () => {
      time += 0.016
      const cx = width / 2
      const cy = heightPx / 2
      applyRepulsion(nodes)
      applySprings(nodes, edges)
      integrateNodes(nodes, width, heightPx, cx, cy, time)
      drawBackground(ctx, width, heightPx, cx, cy)
      drawEdges(ctx, nodes, edges, hover)
      drawNodes(ctx, nodes, hover, time)
      frameRef.current = globalThis.requestAnimationFrame(step)
    }

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      hover = nodes.findIndex((node) => Math.hypot(node.x - x, node.y - y) <= node.r + 10)
      canvas.style.cursor = hover >= 0 ? 'pointer' : 'default'
    }

    const onLeave = () => {
      hover = -1
    }

    resize()
    step()
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerleave', onLeave)

    return () => {
      globalThis.cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerleave', onLeave)
    }
  }, [height])

  return (
    <div
      className={cn(
        'not-prose my-6 overflow-hidden rounded-xl border border-violet-500/20 bg-[#0c0a12] shadow-[inset_0_0_40px_rgba(110,70,180,0.15)]',
        className
      )}
    >
      <div className='text-muted-foreground flex items-center justify-between px-3 py-2 text-[11px] uppercase tracking-wide'>
        <span>Obsidian graph · tranqui-docs</span>
        <span className='text-violet-300/70'>live</span>
      </div>
      <canvas ref={canvasRef} aria-label='Animated Obsidian-style knowledge graph' />
    </div>
  )
}

export default ObsidianGraph
