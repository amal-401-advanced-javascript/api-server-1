'use strict';

const { server } = require('../lib/server'); //this will take only the server method
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Categories API Moddule', () => {
  it('can post()', () => {
    const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  
  it('can get()', () => {
    const obj = { name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/categories').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body[1][key]).toEqual(obj[key]);
          });
        });
      });
  });

  it('can update',()=>{
    const obj = {
      'name': 'scissors',
      'display_name': 'scissors',
      'description': 'scissors'};
    const obj2 = {
      'name': 'Knife',
      'display_name': 'Knife',
      'description': 'Knife'};
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mockRequest.put(`/api/v1/categories/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('can delete ',()=>{
    const obj = {
      'name': 'scissors',
      'display_name': 'scissors',
      'description': 'scissors'};
    return mockRequest.post('/api/v1/categories')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mockRequest.delete(`/api/v1/categories/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual('Category Deleted');
            });
          });
          
      });
  });

  it('can post()', () => {
    const obj = { category:'creams',name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        const record = data.body; // _id
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  
  it('can get()', () => {
    const obj = { category:'creams', name: 'creams', display_name: 'creams', description: 'face cream' };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((data) => {
        return mockRequest.get('/api/v1/products').then((result) => {
          Object.keys(obj).forEach((key) => {
            expect(result.body[1][key]).toEqual(obj[key]);
          });
        });
      });
  });

  it('can update',()=>{
    const obj = {
      'category':'scissors',
      'name': 'scissors',
      'display_name': 'scissors',
      'description': 'scissors'};
    const obj2 = {
      'category':'Knife',
      'name': 'Knife',
      'display_name': 'Knife',
      'description': 'Knife'};
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mockRequest.put(`/api/v1/products/${id}`)
          .send(obj2)
          .then((item)=>{
            Object.keys(obj2).forEach(key=>{
              expect(item.body[key]).toEqual(obj2[key]);
            });
          });
          
      });
  });

  it('can delete',()=>{
    const obj = {
      'category':'scissors',
      'name': 'scissors',
      'display_name': 'scissors',
      'description': 'scissors'};
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const id = result.body._id;
        return mockRequest.delete(`/api/v1/products/${id}`)
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body).toEqual('Product Deleted');
            });
          });
          
      });
  });
});
