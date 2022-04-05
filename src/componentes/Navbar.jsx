import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBCol,
    MDBCardTitle,
} from 'mdb-react-ui-kit';

export default function Navbar() {

    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBCol>
                    <MDBCardTitle className='text-center text-light display-6'>Game</MDBCardTitle>
                </MDBCol>
            </MDBNavbar>
        </>
    );
}


