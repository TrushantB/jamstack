import React, { useEffect, useState } from 'react'
import Button from '../form/button/Button';
export default function PricingPlan({ customPlan }) {
    const [plans, setPlans] = useState([]);
    const [current, setCurrent] = useState(0);
    const [dragDetails, setDragDetails] = useState({});
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
    const onDragOver = (e) => {
        e.preventDefault()
    }
    const onDrop = (e) => {
        plans[current].selected.push(dragDetails.option);
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

    return (
        <div className='my-16'>
            <div className="text-center">
                <h2 className="font-medium text-6xl">
                    {customPlan?.heading}
                </h2>
                <p className="my-6 text-xl px-4 lg:px-56">
                    {customPlan?.description}
                </p>
            </div>
            <div className="my-16 lg:flex">
                <div className="lg:w-1/2">
                    <div className="flex my-8 md:my-16 items-center gap-5 pl-16 md:pl-28 lg:pl-16 ">
                        <div className="w-14 h-14 bg-[#FF5223] rounded-full ">
                        </div>
                        <h3 className=" font-medium">
                            {customPlan?.selectPlanHeading}
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-x-12 gap-y-8 lg:gap-x-24 lg:gap-y-16 flex-wrap">
                        {
                            plans.length && plans[current]?.options?.map((option, index) => {
                                if (plans[current].selected.includes(option)) {
                                    return
                                }
                                return (
                                    <div key={index} draggable={true} onDragStart={() => setDragDetails({ option })} className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md" >
                                        <div>
                                            <span className={`max-h-28 max-w-[112px] mx-auto text-5xl text-tertiary ${option.icon}`}></span>
                                            <p className="font-medium  text-center  mt-2">
                                                {option.name}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[40px] bg-[#F1F2F6] pl-4 my-10 lg:my-0 lg:pl-24 pr-7 py-16">
                    <h3 className="font-medium text-center">
                        {customPlan?.idealPlanHeading}
                    </h3>
                    <ul className="pb-16">
                        {
                            plans?.map((plan, index) => {
                                return (
                                    <li>
                                        <div>
                                            <h4 className={`w-64 my-4  ${current === index ? 'text-primary ' : ''}`}>
                                                {plan.name}
                                            </h4>
                                            {
                                                plan.selected.length ?
                                                    plan.selected.map((selectedPlan, planIndex) => {
                                                        return (
                                                            <>
                                                                <div className="flex w-64 shadow-lg py-3 px-4 rounded-lg bg bg-secondary  text-white mb-4 items-center justify-between">
                                                                    <p>
                                                                        {selectedPlan.name}
                                                                    </p>
                                                                    <span className="w-6 h-6 rounded-full flex justify-center items-center cursor-pointer  bg-[#6d8ae0] text-center " onClick={() => handleClose(index, planIndex)}>
                                                                        <svg width="14px" height="14px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                                                            <g id="Menu / Close_LG">
                                                                                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                {
                                                                    current === index && (plan.selected.length < plan?.options?.length) && <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} className="px-16 py-11  border-dashed border text-2xl text-center border-primary bg-[#f0e7f2]">
                                                                        Drag and Drop
                                                                    </div>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                    : current === index && <div onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e)} className="px-16 py-11  border-dashed border text-2xl text-center border-primary bg-[#f0e7f2]">
                                                        Drag and Drop
                                                    </div>
                                            }

                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>
                        <Button label={'Schedule Meeting'} type={checkIsValid() ? 'primary' : 'disabled'} size={'medium'} />
                    </div>
                </div>
            </div>
        </div>
    )

}