import { Img, Section } from '@react-email/components'

const Logo = () => {
  return (
    <Section className='mb-6'>
      <Img
        src='https://res.cloudinary.com/drizqfyp5/image/upload/v1739568695/jpg-01_eocpam.jpg'
        alt="Luca Imbalzano's logo"
        width='48'
        height='48'
        className='rounded-full'
      />
    </Section>
  )
}

export default Logo
