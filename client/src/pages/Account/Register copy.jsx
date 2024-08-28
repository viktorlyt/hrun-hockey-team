import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import { useAccountContext } from "../../pages/Account/AccountLayout";
import { mockGroups } from "../../data/mockData";
import showToast from "../../components/CustomToast";
import Wrapper from "../../assets/wrappers/Account/Register";
import { formatTime } from "../../utils/functions";
import FormRow from "../../components/FormRow";

// TODO get groups for particular kids???
const groups = mockGroups;

const Register = () => {
  // TODO update CartContext/updateQuantity/both
  const { cart, dispatch } = useContext(CartContext);

  // TODO check if there is something already in the cart
  const [quantity, setQuantity] = useState(1);
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [formData, setFormData] = useState({
    group: 0,
    quantity: quantity,
    selectGroup: false,
  });
  const { user } = useAccountContext();

  const kidsCount = user.kids.length;

  const updateQuantity = (newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: {
        id: cartItem.id,
        // TODO adjust by kids age
        quantity: Math.max(1, Math.min(newQuantity, kidsCount)),
      },
    });
  };

  const hasSufficientKids = kidsCount >= quantity;

  const registerSeason = "Fall 2024"; // TODO implement calculating season

  const getSchedule = (schedule) => {
    return schedule.map((option) => (
      <p key={`${option.weekday}_${option.startTime}`}>
        {`${option.weekday.substring(0, 3)} ${formatTime(
          option.startTime
        )} - ${formatTime(option.endTime)}`}
      </p>
    ));
  };

  const getShortDate = (date) => {
    const validDate = date instanceof Date ? date : new Date(date);

    if (isNaN(validDate)) {
      throw new Error("Invalid date");
    }

    const options = { month: "short", day: "numeric" };
    return validDate.toLocaleDateString("en-US", options);
  };

  const getMaxQuantity = (group) => {
    // const itemInCart = cart.find((item) => item.groupId === group.groupId);
    // return Math.max(1, kidsCount - (itemInCart?.quantity || 1));
    return 10;
  };

  // const maxQuantity = getMaxQuantity(group);
  const maxQuantity = 10;

  const getSpotsAvailable = (group) => {
    // return group.spotsNumber - group.spotsTaken;
  };

  const incrementQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => (prev < maxQuantity ? prev + 1 : prev));
  };
  const decrementQuantity = (e) => {
    e.preventDefault();
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalQuantity < 1) {
      toast.error("Please select at least one group");
      return;
    }

    // dispatch({
    //   type: "ADD_TO_CART",
    //   payload: {
    //     groupId: group.groupId,
    //     name: group.name,
    //     quantity: quantity,
    //     image: group.img,
    //   },
    // });
  };

  //TODO Add implementation for waiting list
  return (
    <Wrapper>
      <p className="season b2">{registerSeason}</p>
      {groups.length > 0 && (
        <>
          <table className="groups">
            <thead>
              <tr className="b1">
                <th></th>
                <th>Class</th>
                <th>Days</th>
                <th>Tuition</th>
                <th>Spots available</th>
                <th>How many kids</th>
              </tr>
            </thead>
            <tbody className="b2">
              {groups.map((g) => (
                <tr key={g.groupId}>
                  <td className="checkbox">
                    <FormRow
                      type="checkbox"
                      name="selectGroup"
                      value={formData.selectGroup}
                      onChange={handleInputChange}
                      disabled={g.spotsNumber - g.spotsTaken < 1}
                    />
                  </td>
                  <td className="class">
                    <input hidden value={g.groupId} />
                    <h5 className="name">
                      {g.name} ({g.minAge}-{g.maxAge} years old)
                    </h5>
                    <p className="b2 desc">{g.decriptionLong}</p>
                  </td>
                  <td className="days">
                    <div className="b2 days">{getSchedule(g.schedule)}</div>
                    <p className="b2 dates">
                      {getShortDate(g.startDate)} - {getShortDate(g.endDate)}
                    </p>
                  </td>
                  <td>{g.tuition} $</td>
                  <td className="spots">{g.spotsNumber - g.spotsTaken}</td>
                  <td className="kids-number">
                    <div className="quantity-selector">
                      <button
                        onClick={decrementQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        name="quantity"
                        onChange={(e) =>
                          setQuantity(
                            Math.min(
                              kidsCount,
                              Math.max(1, parseInt(e.target.value) || 1)
                            )
                          )
                        }
                        min={1}
                        max={kidsCount}
                        disabled={!hasSufficientKids}
                        className="b3"
                      />
                      <button
                        onClick={incrementQuantity}
                        disabled={
                          quantity >= maxQuantity ||
                          !hasSufficientKids ||
                          quantity >= g.spotsNumber - g.spotsTaken
                        }
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={handleSubmit}
            className="b2 selected long add-to-cart"
            disabled={totalQuantity < 1}
          >
            Submit
          </button>
        </>
      )}
      {groups.length <= 0 && <div>No groups to show</div>}
    </Wrapper>
  );
};

export default Register;
