'use client'

import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from '../Avatar/Avatar';
import { Button, ButtonTheme } from '../Button/Button';

const schools = [
    {
        id: 1,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"
    },
    {
        id: 2,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"

    },
    {
        id: 3,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"

    },
    {
        id: 4,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"

    },
    {
        id: 5,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"
    },
    {
        id: 6,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"
    },

    {
        id: 7,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"
    },
    {
        id: 8,
        text: "На Workzilla легко начать зарабатывать без опыта, портфолио и специальных профессиональных знаний. Преимуществом для меня стала безопасная сделка, т.е. заказчик несможет не заплатить вам за выполненную качественно и в срок работу. Стоимость регистрации невысокая, ее можно быстро отбить.",
        image: "/icons/freelancer-1.png",
        userName: "Романцова Евгения"
    },
  ];
  

export const Slider = () => {

    return (
            <div className='container mt-16'>
                <div className='relative'>
                    <Swiper
                        breakpoints={{
                            320: { slidesPerView: 1, slidesPerGroup: 1 }, // Мобильные (1 слайд за раз)
                            640: { slidesPerView: 2, slidesPerGroup: 2 }, // Планшеты (2 слайда)
                            1024: { slidesPerView: 3, slidesPerGroup: 3 }, // Небольшие экраны (3 слайда)
                            1280: { slidesPerView: 4, slidesPerGroup: 4 }, // ПК (4 слайда)
                        }}
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        pagination={{clickable: true}}
                        className='w-full'
                        observer={true} 
                        observeParents={true} 
                        navigation={{ nextEl: ".swiper-btn-next"}}
                    >
                    {schools.map((item) => (
                        <SwiperSlide key={item.id} className='rounded-2xl bg-white p-4'>
                            <div className='text-xs cursor-pointer hover:text-primary duration-200'>
                                {item.text}
                            </div>
                            <div className='mt-6 flex items-center gap-1.5'>
                                <Avatar 
                                    src={item.image}
                                    size={50}
                                />
                                <div>
                                    <div className='text-xs text-primary font-bold'>
                                        {item.userName}
                                    </div>
                                    <div className='text-xs text-secondary'>
                                        Исполнитель
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <Button className='swiper-btn-next absolute -right-12 top-1/2 z-10'>
                        {'>'}
                    </Button>
                </div>
            </div>
    )
}
