'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  SocialLinkEmail,
  SocialLinkGitHub,
  SocialLinkLinkedIn,
  SocialLocation,
  SocialName,
} from '@/_components/ui/Socials';
import DividerHorizontal from '@/_components/dividers/DividerHorizontal';
import ContactForm from './ContactForm';
import Heading from '../text/Heading';
import ContentWrapper from '../containers/ContentWrapper';

function ContactInfo() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <>
      <div className='flex flex-col justify-center items-end gap-2 w-full max-w-[600px] h-fit lg:h-full p-div bg-bgr/50 border border-pri/50 rounded-xs'>
        <div className='grow flex flex-col gap-4 w-full h-full'>
          <Heading tag='h1' className='mt-4'>
            Details
          </Heading>
          <DividerHorizontal />

          <SocialName />
          <SocialLocation />
          <DividerHorizontal />
          <span onClick={() => setShowEmailForm(!showEmailForm)}>
            <SocialLinkEmail />
          </span>
          <div className='flex gap-2 w-full'>
            <SocialLinkGitHub />
            <SocialLinkLinkedIn />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showEmailForm && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className='overflow-hidden flex justify-center w-full mb-[16px]'
          >
            <ContentWrapper className='flex flex-col gap-4 w-full max-w-[600px] p-div'>
              <Heading>Contact me</Heading>
              <DividerHorizontal />
              <ContactForm setShowEmailForm={setShowEmailForm} />
            </ContentWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactInfo;
