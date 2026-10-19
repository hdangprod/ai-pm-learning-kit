import {prepareRetry} from './retry';
import {render,screen,fireEvent,within} from '@testing-library/react';import {it,expect} from 'vitest';import App from '../src/App';
it('M1 filters, grades, reveals, transfers and persists work',()=>{
 const view=render(<App/>);expect(screen.queryByText('Instructor explanation')).not.toBeInTheDocument();expect(screen.getByRole('button',{name:'Reveal solution after an attempt'})).toBeDisabled();
 fireEvent.change(screen.getByLabelText('Segment'),{target:{value:'novice'}});expect(screen.getAllByText('40.00%').length).toBeGreaterThan(0);
 fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'52'}});fireEvent.click(screen.getByLabelText('This is the share who passed among assessed learners; missing outcomes remain unknown.'));(prepareRetry('Check my reasoning'),fireEvent.click(screen.getByText('Check my reasoning')));expect(screen.getByRole('status')).toHaveTextContent('74');
 fireEvent.click(screen.getByText('Reveal solution after an attempt'));expect(screen.getByText('Instructor explanation')).toBeVisible();
 fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'70.27'}});(prepareRetry('Check my reasoning'),fireEvent.click(screen.getByText('Check my reasoning')));expect(screen.getByRole('status')).toHaveTextContent('Practice check passed');
 fireEvent.click(screen.getByText('Try a different question'));fireEvent.change(screen.getByLabelText('Transfer calculation'),{target:{value:'47'}});fireEvent.click(screen.getByLabelText('Keep their outcomes unknown and report coverage.'));(prepareRetry('Check transfer answer'),fireEvent.click(screen.getByText('Check transfer answer')));expect(screen.getByText(/Practice verified/)).toBeVisible();
 fireEvent.change(screen.getByLabelText('What do you expect to find?'),{target:{value:'More sessions may mean friction.'}});view.unmount();render(<App/>);expect(screen.getByLabelText('What do you expect to find?')).toHaveValue('More sessions may mean friction.');expect(screen.getByText('1 / 6')).toBeVisible();
});
it('reset clears exercise feedback, answers and revealed solution without deleting unrelated storage',()=>{
 localStorage.setItem('unrelated-work','keep');render(<App/>);
 fireEvent.change(screen.getByLabelText('Primary calculation'),{target:{value:'52'}});(prepareRetry('Check my reasoning'),fireEvent.click(screen.getByText('Check my reasoning')));fireEvent.click(screen.getByText('Reveal solution after an attempt'));
 expect(screen.getByText('Instructor explanation')).toBeVisible();fireEvent.click(screen.getByText('Reset progress'));fireEvent.click(screen.getByText('Cancel'));expect(screen.getByText('Instructor explanation')).toBeVisible();
 fireEvent.click(screen.getByText('Reset progress'));fireEvent.click(screen.getByText('Yes, reset'));
 expect(screen.queryByText('Instructor explanation')).not.toBeInTheDocument();expect(screen.queryByRole('status')).not.toBeInTheDocument();expect(screen.getByLabelText('Primary calculation')).toHaveValue('');expect(localStorage.getItem('unrelated-work')).toBe('keep');
});
