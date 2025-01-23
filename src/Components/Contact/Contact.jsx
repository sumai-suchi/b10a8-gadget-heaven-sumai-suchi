import React from 'react';

const Contact = () => {
    return (
        <div className='max-w-7xl md:flex '>
            <div className='w-3/5'>
                <img src="https://i.ibb.co.com/FhkpvNy/your-service-329181-11677.jpg" alt="" />
            </div>
            <div className='w-2/5 bg-slate-100'>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="email" placeholder="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Massage</span>
                        </label>
                        <textarea
                            placeholder="Write about your name"
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;