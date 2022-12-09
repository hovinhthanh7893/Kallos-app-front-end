import "./servicerPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServicerList } from "../../store/servicer/thunks";
import { selectServicerList } from "../../store/servicer/selectors";
import { ProfileCard } from "../../components";

const ServicePage = () => {
  const [location, setLocation] = useState("Amsterdam");
  const [provideService, setProvideService] = useState(false);

  const servicerList = useSelector(selectServicerList);

  const dispatch = useDispatch();

  const submitSignUp = (e) => {
    e.preventDefault();
    dispatch(getServicerList(location));
  };

  return (
    <div className="servicePage">
      <form onSubmit={submitSignUp} className="serviceForm">
        <div className="serviceLocation">
          <div className="loginTit">Location</div>
          <select
            className="serviceSelectForm"
            value={location}
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          >
            <option value="Amsterdam">Amsterdam</option>
            <option value="Utrecht">Utrecht</option>
            <option value="Den Haag">Den Haag</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="Amersfoort">Amersfoort</option>
            <option value="Hilversum">Hilversum</option>
            <option value="Deventer">Deventer</option>
            <option value="Eindhoven">Eindhoven</option>
            <option value="Groningen">Groningen</option>
            <option value="Almere">Almere</option>
            <option value="Zwolle">Zwolle</option>
          </select>
        </div>
        <div className="serviceFormLine" />
        <div className="serviceGroup">
          <div className="serviceGroupColumn">
            <div className="serviceTit">Women's hair</div>

            <input
              className="switch"
              type="checkbox"
              id="styling"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="styling">
              Styling
            </label>

            <input
              className="switch"
              type="checkbox"
              id="dying"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="dying">
              Dying
            </label>

            <input
              className="switch"
              type="checkbox"
              id="extension"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="extension">
              Extension
            </label>
          </div>
          <div className="serviceGroupColumn">
            <div className="serviceTit">Men's hair</div>

            <input
              className="switch"
              type="checkbox"
              id="cutting"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="cutting">
              Cutting
            </label>

            <input
              className="switch"
              type="checkbox"
              id="beard"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="beard">
              Beard styling
            </label>
          </div>
          <div className="serviceGroupColumn">
            <div className="serviceTit">Nails</div>
            <input
              className="switch"
              type="checkbox"
              id="manicure"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="manicure">
              Manicure
            </label>

            <input
              className="switch"
              type="checkbox"
              id="decor"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="decor">
              Decoration
            </label>

            <input
              className="switch"
              type="checkbox"
              id="pedicure"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="pedicure">
              Pedicure
            </label>
          </div>
          <div className="serviceGroupColumn">
            <div className="serviceTit">Others</div>
            <input
              className="switch"
              type="checkbox"
              id="eyelash"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="eyelash">
              Eyelash
            </label>

            <input
              className="switch"
              type="checkbox"
              id="eyebrown"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="eyebrown">
              Eyebrown
            </label>

            <input
              className="switch"
              type="checkbox"
              id="makeup"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="makeup">
              Makeup
            </label>
            <input
              className="switch"
              type="checkbox"
              id="tattoo"
              value={provideService}
              onChange={(e) => setProvideService(!provideService)}
            />
            <label className="switchLabel" htmlFor="tattoo">
              Tattoo
            </label>
          </div>
        </div>
        <div className="serviceFormLine" />
        <button type="submit" className="searchButton">
          Search
        </button>
        {!servicerList ? null : (
          <div className="serviceList">
            <div className="serviceFormLine" />
            <div className="serviceResults">
              {servicerList.map((each) => (
                <ProfileCard
                  key={each.id}
                  id={each.userId}
                  name={each.user.name}
                  imageUrl={each.user.imageUrl}
                  star={each.star}
                />
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export { ServicePage };
