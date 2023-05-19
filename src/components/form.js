import { React, useEffect, useState } from "react";
import { get } from "@/client/api";

const Form = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    get("contactUs").then((response) => {
      console.log("data==>", response);
      setContactData(response);
    });
  }, []);

  return (
    <div className="wrapper lg:w-1/2">
      <form
        action="https://forms.zohopublic.in/setoosolutionsprivatelimited/form/ContactUsJamstackplus/formperma/Pp2Ws2PM0DANC2AnR60st_Y1vzc5y2QYa3qUYgzzfgY/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />

        <input
          type="text"
          name="SingleLine"
          fieldType={1}
          maxlength="255"
          placeholder={contactData?.inputName}
        />

        <label></label>
        <input
          type="text"
          maxlength="255"
          name="Email"
          fieldType={9}
          placeholder={contactData?.inutEmal}
        />

        <label>
          {contactData?.productName}
          <em>*</em>
        </label>
        <div>
          <input type="checkbox" id="Checkbox_1" name="Checkbox" value="WebJ" />
          <label for="Checkbox_1">WebJ</label>
          <input
            type="checkbox"
            id="Checkbox_2"
            name="Checkbox"
            value="EcommJ"
          />
          <label for="Checkbox_2">EcommJ</label>
          <input type="checkbox" id="Checkbox_3" name="Checkbox" value="MobJ" />
          <label for="Checkbox_3">MobJ</label>
          <input
            type="checkbox"
            id="Checkbox_4"
            name="Checkbox"
            value="Custom"
          />
          <label for="Checkbox_4">Custom</label>
        </div>

        <label></label>
        <textarea
          name="MultiLine"
          maxlength="65535"
          placeholder={contactData?.placeHolder}
        ></textarea>
        <button type="submit">
          <em>{contactData?.buttonLabel}</em>
        </button>
      </form>
    </div>
  );
};

export default Form;
