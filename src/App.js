import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Notification from "components/Notification/Notification";
import Section from "components/Section/Section";
import Statistics from "components/Statistics/Statistics";
import React, { Component } from 'react';


export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
		const percentage = (good * 100) / result;
		return Math.round(percentage);
	};

	onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};
	render() {
		const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		const objKey = Object.keys(this.state);
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
				</Section>
					
				
					<Section  title="Statistics">
            {this.countTotalFeedback()?(
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}></Statistics>
              ):(
                <Notification message="No feedback given"> </Notification>
              )}
					</Section>
			</>
		);
	}
}
