import React, { useEffect, useState } from 'react'
import Button from '../form/button/Button';
const initialValues = {
    name: "",
    email: "",
    platform: "",
    frontend: "",
    backend: "",
    others: ""
}
export default function PricingPlan({ customPlan }) {
    const [plans, setPlans] = useState([]);
    const [current, setCurrent] = useState(0);
    const [dragDetails, setDragDetails] = useState({});
    const [values, setValues] = useState(initialValues)

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
        return plans.every(plan => {
            if (plan.id === "other") {
                return true;
            } else {
                return plan.selected.length !== 0;
            }
        })
    }

    const scheduleMeeting = async () => {
        let platform = [];
        let frontend = [];
        let backend = [];
        let others = [];
        await plans.map((plan) => {
            switch (plan.id) {
                case "platform":
                    plan.selected.map((selectedPlan) => {
                        platform.push(selectedPlan.name);
                    })
                    break;
                case "frontend":
                    plan.selected.map((selectedPlan) => {
                        frontend.push(selectedPlan.name);
                    })

                    break;
                case "backend":
                    plan.selected.map((selectedPlan) => {
                        backend.push(selectedPlan.name);
                    })

                    break;

                case "other":
                    plan.selected.map((selectedPlan) => {
                        others.push(selectedPlan.name);
                    })
                    break;
            }
        })

        setValues({ ...values, platform: platform.join(","), frontend: frontend.join(","), others: others.join(", "), backend: backend.join(",") })
    }

    useEffect(() => {
        scheduleMeeting();
    }, [plans])

    return (
        <div className='mt-16 container mx-auto'>
            <div className="text-center">
                <h2 className="font-medium text-6xl">
                    {customPlan?.heading}
                </h2>
                <p className="my-6 text-xl px-4 lg:px-48">
                    {customPlan?.description}
                </p>
            </div>
            <div className="mt-16 lg:flex">
                <div className="lg:w-1/2">
                    <div className="flex my-8 md:my-16 items-center gap-5 pl-16 md:pl-28 lg:pl-16 ">
                        <div className="w-8 h-8 md:w-14 md:h-14 bg-[#FF5223] rounded-full ">
                        </div>
                        <h3 className="font-medium text-3xl md:text-4xl">
                            {customPlan?.selectPlanHeading}
                        </h3>
                    </div>
                    <div className="flex justify-center items-center gap-x-8 md:gap-x-12 gap-y-8 lg:gap-x-24 lg:gap-y-16 flex-wrap mb-8 md:mb-0">
                        {
                            plans.length && plans[current]?.options?.map((option, index) => {
                                if (plans[current].selected?.includes(option)) {
                                    return
                                }
                                return (
                                    <button type='button' key={index} draggable={true} onDragStart={() => setDragDetails({ option })} className="w-1/3  flex items-center justify-center py-5 px-10 border-2 border-transparent rounded-2xl shadow-md bg-white">
                                        <div className='text-center'>
                                            <span className={`max-h-28 max-w-[112px] mx-auto text-5xl text-tertiary ${option.icon}`}></span>
                                            <p className="font-medium text-center mt-2 text-base">
                                                {option.name}
                                            </p>
                                        </div>
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="lg:w-1/2 rounded-[40px] bg-[#F1F2F6] pl-4 lg:my-0 lg:pl-24 pr-7 py-16 mt-1 md:mt-16 lg:mt-0">
                    <h3 className="font-medium text-center">
                        {customPlan?.idealPlanHeading}
                    </h3>
                    <ul className="">
                        {
                            plans?.map((plan, index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <h4 className={`w-64 my-4  ${current === index ? 'text-primary ' : ''}`}>
                                                {plan.name}
                                            </h4>
                                            {
                                                plan?.selected?.length ?
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
                                                                                <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#fff" stroke-width="4" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </button>
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
                        <li >
                            <div>
                                <form
                                    action="https://forms.zohopublic.in/setoosolutionsprivatelimited/form/PricingFormJ/formperma/uXOGCYqJuvuf8V0CYLsF6GFY84gC3xVOERWYRsYmXOg/htmlRecords/submit"
                                    name="form"
                                    id="form"
                                    method="POST"
                                    accept-charset="UTF-8"
                                    enctype="multipart/form-data"
                                    className=" pt-8 pb-4 "
                                >
                                    <h6 className='mb-2'>
                                        Please fill up the details
                                    </h6>
                                    <div className='flex flex-col gap-4'>
                                        <input
                                            className=" rounded-full bg-accent-200 px-6 h-[60px] "
                                            placeholder="Name"
                                            required
                                            onChange={(e) => setValues({ ...values, name: e.target.value })}
                                            name="SingleLine"
                                            value={values.name}
                                        />
                                        <input
                                            className=" rounded-full bg-accent-200 px-6 h-[60px]"
                                            placeholder="Email"
                                            name="Email"
                                            type="email"
                                            required
                                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                                            value={values.email}
                                        />
                                        <input type="text" name="SingleLine1" value={values.platform} className='hidden' />
                                        <input type="text" name="SingleLine2" value={values.frontend} className='hidden' />
                                        <input type="text" name="SingleLine3" value={values.backend} className='hidden' />
                                        <input type="text" name="SingleLine4" value={values.others} className='hidden' />

                                        <div >
                                            <Button label={'Schedule Meeting'} type={checkIsValid() ? 'primary' : 'disabled'} size={'medium'} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}