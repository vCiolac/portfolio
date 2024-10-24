import { useEffect, useRef, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';
import { TransitionContext } from '@/context/TransitionContext';

gsap.registerPlugin(ScrollTrigger);

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const { t } = useLanguage();
  const { timeline } = useContext(TransitionContext);
  const formRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const subheadingRef = useRef<HTMLDivElement | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
    setLoading(true);
    setSuccess(null);
    try {
      const response = await fetch('https://tora-api.vercel.app/user/sendemail-portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        setSuccess(t("send_success"));
        reset();
      } else {
        setSuccess(t("send_error"));
      }
    } catch (error) {
      setSuccess(t("send_error"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sectionRef.current && headingRef.current && subheadingRef.current && formRef.current) {
      // Animação de entrada para os textos e formulário
      gsap.timeline()
        .fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 })
        .fromTo(headingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }, 0)
        .fromTo(subheadingRef.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }, 0.2)
        .fromTo(formRef.current, { opacity: 0, scale: 0.8, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, delay: 0.5, duration: 1.5, ease: 'elastic.out(1, 0.5)' }, 0.4);
    }

    // Nova animação de saída
    timeline.add(
      gsap.to(formRef.current, {
        opacity: 0,
        scale: 0.8,
        rotateX: -90,
        duration: 1.5,
        ease: 'expo.in',
      }),
      0
    );
  }, [timeline]);

  return (
    <section ref={sectionRef} className="py-24 dark:bg-offwhite text-white dark:text-black flex flex-col items-center">
      <div ref={headingRef} className="text-4xl md:text-6xl font-bold mb-8 text-center">{t('home_contact')}</div>
      <div ref={subheadingRef} className="text-md md:text-xl font-bold mb-8 text-center max-w-2xl px-4">{t('contact_phrase')}</div>
      <div ref={formRef} className="container mx-auto px-4 md:px-32">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">{t('name')}</label>
            <input
              id="name"
              type="text"
              className="p-2 border border-white bg-black dark:border-black dark:bg-white dark:text-black text-white"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">{t('name_required')}</span>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">E-mail</label>
            <input
              id="email"
              type="email"
              className="p-2 border border-white bg-black dark:border-black dark:bg-white dark:text-black text-white"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">{t('email_required')}</span>}
          </div>

          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="text-lg">{t('message')}</label>
            <textarea
              id="message"
              className="p-2 border border-white bg-black dark:border-black dark:bg-white dark:text-black h-32 text-white"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-red-500">{t('message_required')}</span>}
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="text-lg md:text-xl font-neue animate-border dark:dark-animate-border"
              disabled={loading}
            >
              {loading ? t('sending') : t('send_message')}
            </button>
          </div>
        </form>

        {success && (
          <div className={`mt-4 text-center text-lg ${success.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
            {success}
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
