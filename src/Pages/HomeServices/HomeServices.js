
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';


const HomeServices = () => {
    // Load Fake Data from public folder
    const { services } = useAuth();
    const fakeData = services.slice(0, 6);
    return (
        <div id="services">

            {fakeData.length === 0 ?
                <div className="d-flex justify-content-center py-4">
                    <div className="spinner-border  text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> :
                <div className="services-container row p-5 m-0">
                    <h2 className="fs-1 fw-bold py-4">Our Services</h2>
                    {/* Map */}

                    {
                        fakeData.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            >

                            </Service>
                        )
                    }
                </div>}
        </div>
    );
};

export default HomeServices;