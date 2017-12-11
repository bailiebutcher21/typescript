var HouseType;
(function (HouseType) {
    HouseType[HouseType["RAMBLER"] = 0] = "RAMBLER";
    HouseType[HouseType["TWINHOME"] = 1] = "TWINHOME";
    HouseType[HouseType["CONDO"] = 2] = "CONDO";
    HouseType[HouseType["SINGLE_FAMILY"] = 3] = "SINGLE_FAMILY";
})(HouseType || (HouseType = {}));
;
function getAllHouses() {
    return [
        {
            id: 34334,
            street: '123 Main St',
            city: 'Yuma',
            state: 'AZ',
            type: HouseType.RAMBLER,
            sqFt: 2344,
            setRented: function (renterName) { return console.log("Rented by; 4{renterName}"); }
        },
        {
            id: 34334,
            street: '123 State Street',
            city: 'Orem',
            state: 'UT',
            type: HouseType.CONDO,
            sqFt: 2664,
            setRented: function (renterName) { return console.log("Rented by; 4{renterName}"); }
        }
    ];
}
function getHouseById(houseId) {
    return getAllHouses().filter(function (house) { return house.id == houseId; })[0];
}
printHouse(getHouseById(34434));
function printHouse(house) {
    console.log("House: " + house.street + ", " + house.city + ", " + house.state + ": " + house.sqFt);
}
