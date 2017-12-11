enum HouseType { RAMBLER, TWINHOME, CONDO, SINGLE_FAMILY };

interface House{
    id: number;
    street: string;
    city: string;
    state: string;
    type: HouseType;
    sqFt: number;
    setRented:(renterName: string) => void
}

interface Houses{
    id: 34334,
    street: '123 Main St',
    city: 'Yuma',
    state: 'AZ',
    type: HouseType.RAMBLER,
    sqFt: 2344;
}
function getAllHouses(): House[] {
    return [
        {
            id: 34334,
            street: '123 Main St',
            city: 'Yuma',
            state: 'AZ',
            type: HouseType.RAMBLER,
            sqFt: 2344,
            setRented:(renterName: string): void =>console.log ("Rented by; 4{renterName}")
        },
        {
            id: 34334,
            street: '123 State Street',
            city: 'Orem',
            state: 'UT',
            type: HouseType.CONDO,
            sqFt: 2664,
            setRented:(renterName: string): void =>console.log ("Rented by; 4{renterName}")
        }
    ]
}

function getHouseById(houseId: number): House {
    return getAllHouses().filter(house => house.id == houseId)[0];
}

printHouse(getHouseById(34434));

function printHouse(house: House): void {
    console.log(`House: ${house.street}, ${house.city}, ${house.state}: ${house.sqFt}`);

}
