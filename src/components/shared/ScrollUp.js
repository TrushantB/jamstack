const ScrollUp = () => {
  function scrollToTop() {
    window?.scrollTo(0, 0);
  }

  return (
    <div className="bg-primary flex justify-center items-center rounded-full w-10 h-10 p-4">
      <button
        className="icon-arrow-up w-1 h-1 flex justify-center items-center text-white"
        onClick={scrollToTop}
      ></button>
    </div>
  );
};

export default ScrollUp;
