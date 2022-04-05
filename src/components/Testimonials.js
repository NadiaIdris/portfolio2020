import React, {Component} from 'react';
import '../styles/Testimonials.css'

class Testimonials extends Component {
    render() {
        return (
            <section id="recommendations-container">
                <h2>Testimonials</h2>
                <div className="all-recommendations">
                    <div className="one-recommendation space-right">
                        <div className="vertical-name-and-title">
                            <h5 >Isabel Garvey</h5>
                            <p className="job-title">CEO of Abbey Road Studios</p>
                        </div>
                        <div className="recommendation-text">
                            <p className="text-bold">
                                “Nadia's work is exceptional. She went above and beyond the call of duty and it shows in the work she has delivered.
                            </p>
                            <p className="text-jb-medium">
                                One of the things I learned from Nadia is to be hungrier to learn and have confidence I can self-educate. Several times in the project there were new concepts (whether design, commerce, etc.), this never phased Nadia, and each time she came back having done a tonne of research with concise informed conclusions.”
                            </p>
                        </div>
                    </div>
                    <div className="one-recommendation">
                        <div className="vertical-name-and-title">
                            <h5>John Holland</h5>
                            <p className="job-title">CEO of WholeWorldBand</p>
                        </div>
                        <div className="recommendation-text">
                            <p className="text-bold">
                                “Nadia is one of those people you just love working with. She is smart, inclusive, driven, focused, and one of the nicest people you could hope to meet.                       </p>
                            <p className="text-jb-medium">
                                She has an incredible eye for detail and beauty and raises the bar of what people thought was possible. She balances this with a pragmatic approach to what is possible technically and from a budgetary perspective. Everyone in my company loved working with Nadia.”
                            </p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Testimonials;