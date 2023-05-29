import { React, useEffect, useState } from "react";
import { get } from "@/client/api";import BlogContactCard from '../blogContactCard/blogContactCard';
import BlogContentWriting from '../blogContentWriting/blogContentWriting';
import BlogCard from '../blogCard/BlogCard';

export default function BlogDetailsTableContent({ header, footer }) {

    const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    get("blogDetails").then((response) => {
        setBlogData(response);
    });
  }, []);

  if (!blogData) {
    return <></>;
  }


    const content = `
    <p><span style="color: rgb(0, 0, 0);">Governance by human-centered design refers to an approach to designing and implementing governance systems and processes that are focused on meeting the needs and addressing the concerns of individuals and communities. This approach involves seeking input and feedback from stakeholders, including those affected by the governance decisions, and using this input to inform the design and implementation of the governance system.</span></p>
<p><span style="color: rgb(0, 0, 0);">Human-centered design in governance can involve a variety of approaches and techniques, such as participatory design, co-creation, and stakeholder engagement. It emphasises the importance of understanding the needs and perspectives of different groups and creating governance systems that are responsive to those needs and are able to adapt and evolve over time.</span></p>
<p><span style="color: rgb(0, 0, 0);">One key aspect of human-centered design in governance is the recognition that governance systems and processes are not neutral and can significantly impact the lives and well-being of individuals and communities. By considering the human dimensions of governance, it is possible to design systems and processes that are more effective, equitable, and sustainable.</span></p>
<p><span style="color: rgb(0, 0, 0);">Digital design governance refers to the process of establishing and maintaining standards and guidelines for the design of digital products, services, and experiences. It is an essential aspect of digital design because it helps ensure that the design of a digital product or service is consistent, coherent, and user-friendly. It also helps ensure that the design aligns with the goals and values of the organisation and that it meets the needs of the target audience.</span></p>
<h4><span style="color: rgb(0, 0, 0);">Having a digital design governance process in place can help organisations to:</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Maintain the integrity and coherence of their brand across all digital channels and touchpoints </span></p>
<ol class="list-decimal">
<li style="font-size: 20px;"><span style="color: rgb(0, 0, 0); font-size: 20px;">Foster collaboration and alignment among design teams and stakeholders </span></li>
<li style="font-size: 20px;"><span style="color: rgb(0, 0, 0); font-size: 20px;">Streamline the design process by providing clear guidelines and standards to follow</span></li>
<li style="font-size: 20px;"><span style="color: rgb(0, 0, 0); font-size: 20px;">Ensure that the design of digital products and services meets the needs and expectations of users </span></li>
<li style="font-size: 20px;"><span style="color: rgb(0, 0, 0); font-size: 20px;">Improve the overall user experience of digital products and servics </span></li>
<li style="font-size: 20px;"><span style="color: rgb(0, 0, 0); font-size: 20px;">Reduce the risk of design errors and inconsistencies</span></li>
</ol>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Digital design governance can involve various activities, such as establishing design principles and guidelines, creating templates and patterns for design elements, and conducting design reviews to ensure that designs meet standards and guidelines. It can also involve establishing processes for design feedback, version control, and collaboration. Overall, digital design governance is important because it helps ensure that digital products and services are well-designed, consistent, and meet users' needs.</span></p>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Design-led governance refers to the processes, policies, and practices a company or organisation puts in place to ensure that its design activities align with its overall business strategy and goals. This can include everything from setting design standards and guidelines to establishing design review processes to creating a design-driven culture within the organisation.</span></p>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Effective design governance can help an organisation innovate by ensuring that design efforts are focused on creating value for customers and stakeholders. It can also help to ensure that design activities are aligned with the overall business strategy and goals, which can help to drive innovation by ensuring that design efforts are focused on solving the right problems and creating new opportunities for the organisation.</span></p>
<h4><span style="color: rgb(0, 0, 0);">There are a few key elements that are important for effective design governance:</span></h4>
<h4><span style="color: rgb(0, 0, 0);">Clear goals and objectives</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">It is important to have clear goals and objectives for design efforts so that everyone involved knows what they are working towards.</span></p>
<h4><span style="color: rgb(0, 0, 0);">Strong leadership</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Effective design governance requires strong leadership that is committed to design and innovation, and is able to communicate the importance of design to the rest of the organisation.</span></p>
<h4><span style="color: rgb(0, 0, 0);">Collaboration</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Design governance should encourage collaboration and cross-functional teamwork, as this can help to ensure that design efforts are aligned with the overall business strategy and goals.</span></p>
<h4><span style="color: rgb(0, 0, 0);">Processes and procedures&nbsp;</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Establishing clear processes and procedures for design review, feedback, and decision-making can help to ensure that design efforts are efficient and effective.</span></p>
<h4><span style="color: rgb(0, 0, 0);">Communication</span></h4>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Effective communication is key to successful design governance. It is important to establish clear communication channels between designers, stakeholders, and other team members to ensure everyone is on the same page and working towards the same goals.</span></p>
<p><span style="color: rgb(0, 0, 0); font-size: 20px;">Effective design governance and innovation require a culture of continuous learning and improvement, as well as strong organisational leadership and communication. It is important to foster an environment where design teams feel empowered to take risks and experiment with new ideas while having the support and resources they need to develop and implement those ideas effectively.</span></p>
    `;
  return (
    <>
        <div className='container mx-auto'>
            <div className='my-8 lg:my-16'>
                <div className='md:flex justify-center items-start md:gap-6 lg:gap-16'>
                    <div className='md:w-1/4 px-3'>
                        <h4 className="text-xl">
                            Table of Content
                        </h4>
                        <div>
                            <ol className='list-decimal font-semibold ml-6'>
                                <li className='active:text-primary  my-6'>
                                    <a className="active:text-primary" href="#" >
                                        Digital design process
                                    </a>
                                </li>
                                <li className=' my-6'>
                                    <a className="active:text-primary" href="#" >
                                        Key elements for 
                                        effective design
                                    </a>
                                </li>
                            </ol>
                            <div>
                                <h5 className='text-xl '>
                                    Share this article
                                </h5>
                                <ul className='my-2 flex items-center gap-6 '>
                                    <li>
                                        <a href='#' target='_blank'>
                                            <i className=' icon-twitter'>
                                      
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' target='_blank'>
                                            <i className=' icon-whatsapp1'>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' target='_blank'>
                                            <i className=' icon-facebook2'>
                                            </i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' target='_blank'>
                                            <i className='icon-linkedin' >
                                            
                                            </i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='my-6 sticky top-0'>
                                <BlogContactCard />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-3/4'>
                        <div className=' px-3 blogDetailsInnerPage ' dangerouslySetInnerHTML={{__html:content}}/>
                        <div className='flex md:justify-end'>
                            <div className='px-3 '>
                                <BlogContentWriting />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-8 lg:my-16">
                    <div className="text-center">
                        <h2>Related Blogs </h2>
                    </div>
                    <div className='px-3 '>
                        <BlogCard {...blogData?.blogCard} />
                    </div>
                </div>
            </div>
            
        </div>
     
    </>
  )
}
