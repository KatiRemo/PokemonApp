import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <p>
                The Pokemon App has been created as a part of the React Advanced course at Helsinki Business College.
                </p>
                <p>
                When creating this app we studied using React Bootstrap and Hooks.
                </p>
                <p>
                I hope you've enjoyed getting know Pokemons with the help of this app!
                </p>
                <p>
                If you would like to see my other projects, please visit my <a href=" https://github.com/KatiRemo" target="_blank"><strong> GitHub </strong></a>.
            </p>
            <div className="hban">
                <img src="https://source.unsplash.com/a5ofjvTGNnQ" alt="dragon" />
            </div>

        </div>
    );
};

export default About;