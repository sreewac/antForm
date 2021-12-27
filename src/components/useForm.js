import {Form,Select} from "antd"


export const useForms =()=>{
    
    const{Option}=Select

   

    const getHook = (e) => {
        console.log('Upload event:', e);
      
        if (Array.isArray(e)) {
          return e;
        }
      
        return e && e.fileList;
      };


      const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
            <Option value="91">+91</Option>
            <Option value="07">+07</Option>
          </Select>
        </Form.Item>
      );
  
   return{
       getHook,
      prefixSelector
      
   }
}