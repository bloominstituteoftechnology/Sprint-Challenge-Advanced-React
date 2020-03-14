import React from 'react';

const SearchForm = propos => {
    const onSearchChanged = event => {
        propos.setSearchText(event.target.value);
    };

    return (
        <Section className="search-form">
            <form>
                <input
                id="search"
                name="textfield"
                placeholder="Search"
                onChange={onSearchChanged}
                value={propos.setSearchText}

                />
            </form>

        </Section>
    )
}