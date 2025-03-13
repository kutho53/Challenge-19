import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    mount(<Quiz />);
    cy.get('h1').contains('Tech Quiz'); // Adjust based on your component's structure
  });
