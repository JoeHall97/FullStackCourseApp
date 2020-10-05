import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { formReview: false }; // state constructor shortcut from create-react-app

  renderContent() {
    if (this.state.formReview) {
      return <SurveyReview onCancel = {() => this.setState({ formReview: false })} />;
    }
    return <SurveyForm onSurveySubmit = {() => this.setState({ formReview: true })} />;
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);