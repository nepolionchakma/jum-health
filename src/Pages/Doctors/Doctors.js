
import useAuth from '../../hooks/useAuth';
import Doctor from '../Doctor/Doctor';
import "./Doctors.css"


const Doctors = () => {

    // Load Fake Data from public folder
    const { doctors } = useAuth();
    return (
        <div id="doctors" className="doctors-team p-5">
            <div>
                <h5 className="fs-4 text-danger">Doctors Team</h5>
                <h3 className="fs-1 fw-bold py-4">We Are Happy To Help You</h3>
            </div>
            {doctors.length === 0 ?
                <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border  text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> :
                <div className="row m-0">

                    {/* Map */}

                    {
                        doctors.map(service =>
                            <Doctor
                                key={service.id}
                                service={service}
                            >

                            </Doctor>
                        )
                    }
                </div>}
        </div>
    );
};

export default Doctors;