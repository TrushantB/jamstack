const ScrollUp = () => {
  function scrollToTop() {
    window?.scrollTo(0, 0);
  }

  return (
    <div className="bg-secondary flex justify-center items-center rounded-full w-10 h-10 p-4 shadow-[0px_2px_5px_0px_#00000024,0px_2px_10px_0px_#0000001A]">
      <button
        className="fas icon-arrow-up2 flex justify-center items-center text-white text-base"
        onClick={scrollToTop}
        onScroll
      ></button>
    </div>
  );
};

export default ScrollUp;
