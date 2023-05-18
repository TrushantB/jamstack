import React, { useState } from 'react';

const Form = () => {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (value) => {
    if (selectedButtons.includes(value)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== value));
    } else {
      setSelectedButtons([...selectedButtons, value]);
    }
  };

  return (
    <div className='pl-24' >
      <form
        action="https://forms.zohopublic.in/setoosolutionsprivatelimited/form/ContactUsJamstackplus/formperma/Pp2Ws2PM0DANC2AnR60st_Y1vzc5y2QYa3qUYgzzfgY/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        className='flex flex-col w-1/2'
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
      

        <input type="text" className=' mb-7 h-14 px-2 text-black  bg-[#F1F2F6] focus:outline-[#F0027F] rounded-full '  name="SingleLine"  placeholder="Name" />

        <input type="text"  className='mb-7 h-14 px-2 text-black  bg-[#F1F2F6] focus:outline-[#F0027F] rounded-full '  name="Email"  placeholder="Email" />

        <div className='flex gap-16 mb-7'>
          <ToggleButton
            value="WebJ"
            isSelected={selectedButtons.includes('WebJ')}
            onClick={handleButtonClick}
        
          >
            WebJ
          </ToggleButton>
          <ToggleButton
            value="EcommJ"
            isSelected={selectedButtons.includes('EcommJ')}
            onClick={handleButtonClick}
          >
            EcommJ
          </ToggleButton>
          <ToggleButton
            value="MobJ"
            isSelected={selectedButtons.includes('MobJ')}
            onClick={handleButtonClick}
          >
            MobJ
          </ToggleButton>
          <ToggleButton
            value="Custom"
            isSelected={selectedButtons.includes('Custom')}
            onClick={handleButtonClick}
          >
            Ecomj+MobJ
          </ToggleButton>
        </div>

        <label>Project Details</label>
        <textarea className='bg-[#F1F2F6] rounded-3xl p-2' name="MultiLine" rows={8} maxLength="65535" placeholder="Project Details"></textarea>

        <button type="submit">
          <em>Submit</em>
        </button>
      </form>
    </div>
  );
};

const ToggleButton = ({ value, isSelected, onClick, children }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <button type="button" className={`toggle-button h-14 flex rounded-full px-9 bg-[#F1F2F6] justify-center items-center ${isSelected ? 'selected bg-[#4767F6] text-white' : ''}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Form;
