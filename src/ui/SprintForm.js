import React from 'react';

const SprintForm = ({ submitHandler }) => {

    let _sprintName, _sprintDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _sprintName.value,
            date: _sprintDate.value
        });

        clearForm();
    }

    const clearForm = () => {
        _sprintName.value = '';
        _sprintDate.value = '';
    }

    return (
        <form onSubmit={handleSubmit} class="form-inline">
            <div class="form-group mb-2">
                <label for="sprint_name" class="sr-only">Sprint Name</label>
                <input type="text" ref={input => _sprintName = input} readonly class="form-control" id="sprint_name" placeholder="Set Sprint Name" />
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="sprint_date" class="sr-only">Sprint Date</label>
                <input type="text" ref={input => _sprintDate = input} class="form-control" id="sprint_date" placeholder="Set Sprint Date" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save</button>
        </form>
    );
};

export default SprintForm;