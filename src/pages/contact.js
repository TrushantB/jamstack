import Layout from "@/components/layout";
const About = ({ header, footer }) => {
  return (
    <Layout header={header} footer={footer}>
      {/* form section */}
      <div className="lg:pl-24 pt-24 pb-24">
        <h2 className="lg:w-7/12">
          Let’s prepare your uniquely engineered digital presence together!
        </h2>
        <p className="w-1/2">
          We are eager to connect with you in the journey of enhancing the PLUS
          in your business. Help us to know more about you.
        </p>
      </div>

      {/* cta section */}
      <div className="pl-24">
        <h3 className="lg:w-8/12 pb-5">
          If you prefer, send us an email for new business opportunities or job
          openings.
        </h3>
        <a
          href="mailto: hello@jamstack.plus"
          className="text-primary heading-4"
        >
          {" "}
          hello@jamstack.plus
        </a>
      </div>

      {/* case study section */}
      <div className=" border-t-2 border-b-2 pb-24 border-blue-600">
        <h2 className="text-4xl text-center ">Case Study</h2>
      </div>

      {/* Testimonial section */}
      <div className="pb-24 border-t-2 border-b-2 border-red-600">
        <h2 className="text-4xl text-center ">Testimonial</h2>
        <div className="flex flex-col lg:flex-row  ">
          <div className="lg:w-5/12 border-2 px-10 py-2">section1</div>
          <div className="lg:w-7/12 border-2 px-10 py-2">Section2</div>
        </div>
      </div>

      {/* Blog card section */}
      <div className="pb-24 border-t-2 border-b-2 border-blue-500">
        <h2 className="text-center text-4xl">Blog card</h2>
      </div>
    </Layout>
  );
};
export default About;
