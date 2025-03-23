import {
  Command,
  CommandEmpty,
  CommandFooter,
  CommandFooterTrigger,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Kbd
} from '@simbashrd/ui'
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon
} from 'lucide-react'
import Image from 'next/image'

const CommandDemo = () => {
  return (
    <Command className='max-w-md'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <CalendarIcon />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <SmileIcon />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <UserIcon />
            <span>Profile</span>
            <Kbd keys={['command']}>P</Kbd>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon />
            <span>Billing</span>
            <Kbd keys={['command']}>B</Kbd>
          </CommandItem>
          <CommandItem>
            <SettingsIcon />
            <span>Settings</span>
            <Kbd keys={['command']}>S</Kbd>
          </CommandItem>
        </CommandGroup>
      </CommandList>
      <CommandFooter>
        {/* <Logo className='size-4' /> */}
        <Image
          src='https://res.cloudinary.com/drizqfyp5/image/upload/v1739568695/jpg-01_eocpam.jpg'
          alt="Luca Imbalzano's logo"
          width='48'
          height='48'
          className='rounded-full'
        />
        <CommandFooterTrigger triggerKey={<Kbd keys={['enter']} className='py-0' />}>
          Open Command
        </CommandFooterTrigger>
      </CommandFooter>
    </Command>
  )
}

export default CommandDemo
