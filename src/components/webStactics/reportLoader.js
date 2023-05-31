import React from 'react'

const ReportLoader = () => {
    const containers = document.querySelectorAll('.animation > div');
const fillClass = 'fill';

function fillContainers() {
  containers.forEach((container, index) => {
    setTimeout(() => {
      container.classList.add(fillClass);
      if (index === containers.length - 1) {
        setTimeout(resetContainers, 6000);
      }
    }, index * 2000);
  });
}

function resetContainers() {
  containers.forEach(container => {
    container.classList.remove(fillClass);
  });
  fillContainers();
}

fillContainers();
  return (
    <div className='flex justify-center items-center gap-5 py-10'>
        <div className='diamond animation bg-accent-200 w-10 h-10'></div>
        <div className='circle animation bg-accent-200 w-10 h-10'></div>

        <div className='pentagon animation bg-accent-200 w-10 h-10'></div>

        

    </div>
  )
}

export default ReportLoader