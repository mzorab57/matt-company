import React from 'react'

const HeaderText = ({header}) => {
  return (
    <div>
       <h1 
              className="text-3xl  sm:text-3xl lg:text-6xl font-bold text-black"
              data-aos="fade-up"
              data-aos-duration="600"
              style={{
                // margin: '10px 0 20px',
                WebkitTextFillColor: 'transparent',
                WebkitTextStrokeWidth: '1px',
                WebkitTextStrokeColor: '#fff',
                marginBottom: '20px',
                // fontSize: '40px',
                lineHeight: '55px',
                color: '#0d0845',
                fontFamily: 'Jost, sans-serif'
              }}
            >
              {header}
            </h1>
    </div>
  )
}

export default HeaderText
