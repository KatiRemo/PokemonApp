import React, {useEffect} from 'react';
import { Button } from 'react-bootstrap';

const GoTop = (props) => {


  useEffect(() => {
    backToTop();
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
          });
        };


    return (
      <>
        <div>
          <Button onClick={backToTop} className="goTop" variant="outline-dark" size="lg">
            <i className="goTop__text fas fa-chevron-up" />Back to Top
          </Button>
        </div>
      </>
    );
  };
  export default GoTop;