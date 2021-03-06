'use strict';

/**
 * Model module 
 * @module Model
 */


/**
 * Model class 
 * @class Model
 */

class Model {

  /**
* Model Constructor
* @param {object} schema
*/
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * get all records
   * @param {string} _id 
   * @returns {array} the records
   */
  async read(_id) {
    try {
      const recordId = _id ? {_id} : {};
      return await this.schema.find(recordId);
    } catch (err) {
      Promise.reject(err);
    }
  }

  /**
   * get one records
   * @param {string} _id 
   * @returns {array} the record
   */
  async readOne(record){
    try{
      return await this.schema.find(record);
    }catch(err){
      Promise.reject(err);
    }
  }


  /**
   * create a record
   * @param {object} record 
   * @returns {object} the record
   */
  async create(record){
    try{
      const newRecord = new this.schema(record);
      return await newRecord.save(newRecord);
    }catch(err){
      Promise.reject(err);
    }
  }


  /**
   * update a record
   * @param {string} _id
   * @param {object} record 
   * @returns {object} the record
   */
  async update(_id, record){
    try{
      return await this.schema.findByIdAndUpdate(_id, record, {new: true});
    }catch(err){
      Promise.reject(err);
    }
  }
  /**
   * delete a record
   * @param {string} _id
   * @returns {object} the record
   */
  async delete(_id){
    try{
      return await this.schema.findByIdAndDelete(_id);
    }catch(err){
      Promise.reject(err);
    }
  }
}

module.exports = Model;