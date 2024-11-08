import banner from '../../assets/banner.jpg'

const AbsoluteSection = () => {
    return (
        <div className='absolute top-48 left-72 bg-neutral-50 rounded-2xl 
         p-2 ' >
            <img className='max-w-[1060px] rounded-2xl max-h-[563px]' src={banner} alt="" />
            
        </div>
    );
};

export default AbsoluteSection;