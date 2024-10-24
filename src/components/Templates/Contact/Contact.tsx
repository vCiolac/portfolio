import { useEffect, useRef, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { TransitionContext } from '@/context/TransitionContext';

gsap.registerPlugin(ScrollTrigger);

interface IFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const { t } = useLanguage();
  const { timeline } = useContext(TransitionContext);
  const formRef = useRef<HTMLDivElement | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      );
    }

    timeline.add(
      gsap.to(formRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.in',
      }),
      0
    );
  }, [timeline]);

  return (
    <section className="py-24 dark:bg-offwhite text-white dark:text-black flex flex-col items-center">
      <div className="text-5xl font-bold mb-8">{t('home_contact')}</div>
      
      <div ref={formRef} className="container mx-auto px-4 md:px-32">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">{t('name')}</label>
            <input
              id="name"
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">{t('name_required')}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">{t('email')}</label>
            <input
              id="email"
              type="email"
              className="p-2 border border-gray-300 rounded-lg"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">{t('email_required')}</span>}
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="subject" className="text-lg">{t('subject')}</label>
            <input
              id="subject"
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              {...register("subject", { required: true })}
            />
            {errors.subject && <span className="text-red-500">{t('subject_required')}</span>}
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="text-lg">{t('message')}</label>
            <textarea
              id="message"
              className="p-2 border border-gray-300 rounded-lg h-32"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-red-500">{t('message_required')}</span>}
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {t('send_message')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
