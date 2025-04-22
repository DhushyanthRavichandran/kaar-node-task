const User=require('../models/user.Model');

exports.getAllUser=async(req,res)=>{
    try{
       let users= await User.find();
       res.status(200).json({
        success:true,
        users
       })
    }catch(err){
        console.error('Error fetching users:', err);
        res.status(500).json({
          success: false,
          message: 'Server Error',
          error: err.message
        });
    }
}
exports.createUser =async (req,res)=>{
    try{
        const user = await User.create(req.body);
       res.status(201).json({
      success: true,
      user
        })
    }catch(err){
        console.error('Error fetching users:', err);
        res.status(500).json({
          success: false,
          message: 'Server Error',
          error: err.message
        });

}
}

exports.updateUser =async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
          });
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.status(200).json({
        success: true,
        user
      });
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: err.message
      });
    }
  };


  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.status(200).json({
        success: true,
        message: 'User deleted successfully'
      });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({
        success: false,
        message: 'Server Error',
        error: err.message
      });
    }
  };

  exports.getSingleUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ success: false, message: 'User not found' });
      res.status(200).json({ success: true, user });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
  