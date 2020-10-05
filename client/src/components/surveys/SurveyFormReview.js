import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h4>Please review your entries</h4>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        <i className="material-icons left">arrow_back</i>
        Back
      </button>
      <button
        className="green white-text btn-flat right"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values  
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));