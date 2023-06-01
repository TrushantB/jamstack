import React, { useEffect, useState } from 'react'
import Button from '../form/button/Button';
export default function PricingPlanMobile({ customPlan }) {
    const [plans, setPlans] = useState([]);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        setPlans(customPlan?.plans || [])
    }, [customPlan?.plans])
    const handleClose = (index, planIndex) => {
        setCurrent(index);
        if (index === 0) {
            plans.map((plan) => {
                plan.selected = []
            })
        } else {
            plans[index].selected.splice(planIndex, 1)
        }
        setPlans([...plans])
    }

    const onDrop = (option) => {
        plans[current].selected.push(option);
        for (let plan = 0; plan < plans.length; plan++) {
            const element = plans[plan];
            if (!element?.selected?.length) {
                setCurrent(plan)
                break;
            } else if (plan === plans.length - 1) {
                setCurrent(plan)
            }
        }
        setPlans([...plans])

    }

    const checkIsValid = () => {
        return plans.every(plan => plan.selected.length !== 0);
    }
    const scheduleMeeting = () => {
        window.open('https://harishboke-setoo.zohobookings.in/#/customer/contactus', '_blank')
    }

    return (
        <div className='mt-16'>
            <div className="text-center">
                <h2 className="font-medium text-6xl">
                    {customPlan?.heading}
                </h2>
                <p className="my-6 text-xl px-4 lg:px-56">
                    {customPlan?.description}
                </p>
            </div>
            <div className="mt-16 lg:flex">
                <div className="rounded-[40px] bg-[#F1F2F6] pl-4 lg:my-0 lg:pl-24 pr-7 py-16">
                    <h3 className="font-medium text-center">
                        {customPlan?.idealPlanHeading}
                    </h3>
                    <ul className="pb-16">
                        {
                            plans?.map((plan, index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <h4 className={`w-64 my-4  ${current === index ? 'text-primary ' : ''}`}>
                                                {plan.name}
                                            </h4>
                                            {
                                                plan.selected.length ?
                                                    plan.selected.map((selectedPlan, planIndex) => {
                                                        return (
                                                            <>
                                                                <button type='button' className="flex w-64 shadow-lg py-3 px-4 rounded-lg bg bg-secondary  text-white mb-4 items-center justify-between text-base">
                                                                    <p>
                                                                        {selectedPlan.name}
                                                                    </p>
                                                                    <span aria-label="Close" tabIndex={0} className="w-6 h-6 rounded-full flex justify-center items-center cursor-pointer  bg-[#6d8ae0] text-center " onClick={() => handleClose(index, planIndex)}>
                                                                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                                                            <g id="Menu / Close_LG">
                                                                                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" stroke-width="4" stroke-linecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </button>

                                                                {
                                                                    current === index && (plan.selected.length < plan?.options?.length) && <div>
                                                                        <select onChange={(e) => {
                                                                            const selected = plans[current]?.options.find(option => option.id === e.target.value)
                                                                            selected && onDrop(selected);
                                                                        }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                            <option value={"choose"}>{`Choose ${plan.name}`}</option>
                                                                            {
                                                                                plans.length && plans[current]?.options?.map((option, index) => {
                                                                                    if (plans[current].selected.includes(option)) {
                                                                                        return
                                                                                    }
                                                                                    return (
                                                                                        <option key={index} value={option.id}>{option.name}</option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                    </div>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                    : current === index && <div >
                                                        <select onChange={(e) => {
                                                            const selected = plans[current]?.options.find(option => option.id === e.target.value)
                                                            onDrop(selected)
                                                        }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                            <option value={"choose"}>{`Choose ${plan.name}`}</option>
                                                            {
                                                                plans.length && plans[current]?.options?.map((option, index) => {
                                                                    if (plans[current].selected.includes(option)) {
                                                                        return
                                                                    }
                                                                    return (
                                                                        <option key={index} value={option.id}>{option.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                            }
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <Button label={'Schedule Meeting'} type={checkIsValid() ? 'primary' : 'disabled'} size={'medium'} onClick={() => scheduleMeeting()} />
                    </div>
                </div>
            </div>
        </div>
    )

}