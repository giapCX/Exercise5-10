import { useState } from "react";
import "./style.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    from: "Hà nội",
    to: "Hà nội",
    type: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevForm) => {
        const newType = checked
          ? [...prevForm.type, value]
          : prevForm.type.filter((v) => v !== value);
        return { ...prevForm, [name]: newType };
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đặt vé thành công!");
  };

  return (
    <div className="booking-form">
      <div className="alert-box">×</div>

      <h1>Form đặt vé máy bay</h1>

      {/* Họ tên - form-group */}
      <div className="form-group">
        <label>Họ tên</label>

        <div className="input-group">
          <span>♙</span>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={form.name}
            onChange={handleChange}
          />
          <span>vnd</span>
        </div>

        <small>Phải nhập 5 ký tự, in hoa...</small>
      </div>

      {/* Địa chỉ - form-group */}
      <div className="form-group">
        <label>Địa chỉ</label>

        <input
          className="address"
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
        />

        <small>Phải nhập 5 ký tự, in hoa...</small>
      </div>

      {/* Đi từ + Đến - form-group */}
      <div className="form-group">
        <div className="location">
          <div>
            <label>Đi từ</label>
            <select name="from" value={form.from} onChange={handleChange}>
              <option>Hà nội</option>
              <option>Đà nẵng</option>
              <option>TP Hồ Chí Minh</option>
            </select>
          </div>

          <div>
            <label>Đến</label>
            <select name="to" value={form.to} onChange={handleChange}>
              <option>Hà nội</option>
              <option>Đà nẵng</option>
              <option>TP Hồ Chí Minh</option>
            </select>
          </div>
        </div>
      </div>

      {/* Chiều đi - form-group */}
      <div className="form-group">
        <label>Chọn chiều đi (Khứ hồi)</label>

        <label className="box">
          <input
            type="checkbox"
            name="type"
            value="Đi"
            checked={form.type.includes("Đi")}
            onChange={handleChange}
          />
          Đi
        </label>

        <label className="box">
          <input
            type="checkbox"
            name="type"
            value="Về"
            checked={form.type.includes("Về")}
            onChange={handleChange}
          />
          Về
        </label>
      </div>

      {/* Submit - form-group */}
      <div className="form-group">
        <button className="submit" onClick={handleSubmit}>
          Đặt vé
        </button>
      </div>
    </div>
  );
}

export default App;
