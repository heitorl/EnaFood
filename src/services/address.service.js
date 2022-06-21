import { User } from "../models";
import { Address } from "../models";
import { serializedCreateAddressSchema } from "../schemas";

class AddressService {
  createAddress = async (req) => {
    const user = await User.findOne({
      _id: req.decoded._id,
    });

    const address = await Address.create({
      ...req.validated,
      user,
    });

    user["address"] = address._id;
    console.log(user);

    user.save();

    return await serializedCreateAddressSchema.validate(address, {
      stripUnknown: true,
    });
  };
}

export default new AddressService();
