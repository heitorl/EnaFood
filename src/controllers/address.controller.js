import { addressService } from "../services";

class AddressController {
  createAddress = async (req, res) => {
    const address = await addressService.createAddress(req);

    return res.status(201).json({ address });
  };
}

export default new AddressController();
