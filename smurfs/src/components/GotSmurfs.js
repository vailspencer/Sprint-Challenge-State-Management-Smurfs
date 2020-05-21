import React from 'react';
import { connect } from 'react-redux';
import { 
    getData, 
    newSmurf,
    handleName,
    handleAge,
    handleHeight
} from '../actions/actions.js';
import Card from './Card.js'

const SmurfsList = props => {
    const fetchSmurfs = evt => {
        evt.preventDefault();
        props.getData();
    }

if (!props.smurfs.length) props.newSmurf();

const handleSubmit = event => {
    event.preventDefault();
    if (
    props.smurfs.filter(smurf => smurf.name === props.newSmurf.name)
        .length === 0
    )
    props.newSmurf(props.newSmurf);
    else alert(`Smurf Already exists!!`);

    if (!props.postSuccees) {
    alert('New Smurf added');
    } else {
    alert('unable to add');
    } 
};

    return (
        <>
        <div>
            <h1>Build a Smurf</h1>
            <form>
                <input 
                onChange = {props.handleName}
                type = 'text'
                placeholder = 'Name'
                required
                />

                <input 
                onChange = {props.handleAge}
                type = 'number'
                placeholder = 'Age'
                required
                minLength = '2'
                maxLength = '4'
                />

                <input 
                onChange = {props.handleHeight}
                type = 'number'
                placeholder = 'Height'
                required
                minLength = '1'
                maxLength = '2'
                />
                <button onClick={handleSubmit}>Construct the Smurf!</button>
            </form>
        </div>

        <h2> Them Smurfs</h2>
    <div>  
        {props.smurfs.map(smurf => {
            return <Card key={smurf.id} smurf={smurf} />;})
        }
        <button onClick={fetchSmurfs}>Release the Smurfs!</button>
    </div>
        {props.error && <p>{props.error}</p>}
        </>
    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.err,
    newSmurf: state.newSmurf
});

export default connect(
    mapStateToProps,
    {getData,
    newSmurf,
    handleName,
    handleAge,
    handleHeight
}
) (SmurfsList)