import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from './actions';
import Error from '../error/Error';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';
import './services.css';

const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.isLoading);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(getServices());
  }

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <Error message={error.message} onRetry={handleRetry} />
      ) : (
        <ul className="services-list">
          {services.map((service) => (
            <Link 
              className="service-item service-link" 
              key={service.id} 
              to={`/services/${service.id}`}
            >
              <li>
                <h4>{service.name}</h4>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Services;