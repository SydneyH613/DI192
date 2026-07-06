function FormComponent({ formData, handleChange }) {
  return (
    <form method="GET">
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <br />

      <fieldset>
        <legend>Gender</legend>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
      </fieldset>

      <label>
        Destination:
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="Japan">Japan</option>
          <option value="France">France</option>
          <option value="Canada">Canada</option>
          <option value="Brazil">Brazil</option>
        </select>
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free
      </label>
      <br />

      <button type="submit">Submit</button>

      <div className="preview">
        <h2>Live Preview</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
        <p>Destination: {formData.destination}</p>
        <p>Lactose Free: {formData.lactoseFree ? 'Yes' : 'No'}</p>
      </div>
    </form>
  );
}

export default FormComponent;
