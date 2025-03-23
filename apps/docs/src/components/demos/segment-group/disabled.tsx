import { SegmentGroup, SegmentGroupItem } from '@simbashrd/ui'

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' }
]

const SegmentGroupDisabledDemo = () => {
  return (
    <SegmentGroup defaultValue='react'>
      {frameworks.map((framework) => (
        <SegmentGroupItem
          key={framework.value}
          value={framework.value}
          disabled={framework.disabled}
        >
          {framework.label}
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  )
}

export default SegmentGroupDisabledDemo
