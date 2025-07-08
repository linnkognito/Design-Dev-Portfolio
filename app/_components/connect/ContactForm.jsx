import ButtonCTA from '@/_components/buttons/ButtonCTA';
import FormRow from '@/_components/ui/FormRow';

function ContactForm({ setShowEmailForm }) {
  return (
    <form
      action='https://formsubmit.co/linn.es.johansen@gmail.com'
      method='POST'
      className='flex flex-col items-center justify-center gap-4 w-full'
    >
      <FormRow
        type='text'
        label='Subject'
        htmlFor='subject'
        name='_subject'
        placeholder='Subject'
        required
      />

      <FormRow
        type='email'
        label='From'
        htmlFor='email'
        name='email'
        placeholder='name@example.com'
        required
      />

      <FormRow
        label='Message'
        htmlFor='message'
        name='message'
        placeholder='Your message...'
        textarea={true}
        required
      />

      <div className='flex justify-center gap-3 w-full max-w-8/10'>
        <ButtonCTA
          type='button'
          variant='pill'
          className='min-w-[134px] w-2/5 mt-2'
          onClick={() => setShowEmailForm(false)}
        >
          Cancel
        </ButtonCTA>
        <ButtonCTA
          type='submit'
          variant='pill'
          color='popHover'
          className='min-w-[134px] w-2/5 mt-2 hover:border-pop'
        >
          Send
        </ButtonCTA>
      </div>

      {/* Form Metadata */}
      <input
        type='hidden'
        name='_subject'
        value='New message from your portfolio!'
      />
      <input
        type='hidden'
        name='_next'
        value='http://localhost:3000/connect/success'
      />
      <input type='hidden' name='_captcha' value='false' />
    </form>
  );
}

export default ContactForm;
