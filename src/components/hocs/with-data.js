import React from "react";
import {Loader} from "../../common/loader/loader";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View) => {
   return class extends React.Component{

      state = {
         dataList: null,
         loading: true,
         error: false
      }

      componentDidMount() {
         this.update();
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
         if (this.props.getData !== prevProps.getData) {
            this.update();
         }
      }

      update () {
         this.setState( {
            loading: true,
            error: false
         });

         this.props.getData()
            .then( (dataList) => {
               this.setState({
                  dataList,
                  loading: false
               });
            })
            .catch( ()=> {
               this.setState({
                  error: true,
                  loading: false
               });
            });
      }

      render() {

         const { dataList, loading, error } = this.state
         if (loading) {
            return <Loader/>;
         }

         if (error) {
            return <ErrorIndicator />;
         }

         return <View {...this.props} dataList={dataList}/>
      }
   }
}

export default withData