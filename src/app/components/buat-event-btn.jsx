'use client';
export default function BuatEventBtn() {
    return (
        <>
            <div className="flex flex-col justify-center font-bold text-center text-zinc-800 bg-gradient-to-r from-[#FFDC5F] cursor-pointer to-[#FFEFB7] rounded-full">

                <button className="justify-center px-4 py-2" onClick={() => document.getElementById('my_modal_2').showModal()}>Buat Event</button>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Silahkan Login</h3>
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>

                    </form>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}