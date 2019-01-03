import React from 'react';

const ReleaseForm = ({ submitHandler }) => {
    let _releaseName, _releaseDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _releaseName.value,
            date: _releaseDate.value
        });

        clearForm();
    }

    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
    }

    return (
        <form onSubmit={handleSubmit} class="form-inline">
            <div class="form-group mb-2">
                <label for="release_name" class="sr-only">Release Name</label>
                <input type="text" ref={input => _releaseName = input} class="form-control" id="release_name" placeholder="Set Release Name" />
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="release_date" class="sr-only">Release Date</label>
                <input type="text" ref={input => _releaseDate = input} class="form-control" id="release_date" placeholder="Set Release Date" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Save</button>
        </form>
    );
};

export default ReleaseForm;