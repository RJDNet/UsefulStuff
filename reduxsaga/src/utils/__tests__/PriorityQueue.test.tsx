// Utility Component
import PriorityQueue from '../PriorityQueue';

describe('PriorityQueue Class', () => {
  describe('methods are called', () => {
    it('enqueue method is called', () => {
      const queue = new PriorityQueue();

      jest.spyOn(queue, 'enqueue');
      queue.enqueue(['A']);

      expect(queue.enqueue).toHaveBeenCalled();
      expect(queue.enqueue).toHaveBeenCalledWith(['A']);
    });

    it('dequeue method is called', () => {
      const queue = new PriorityQueue();

      jest.spyOn(queue, 'dequeue');
      queue.dequeue();

      expect(queue.dequeue).toHaveBeenCalled();
      expect(queue.dequeue).toHaveBeenCalledWith();
    });

    it('isEmpty method is called', () => {
      const queue = new PriorityQueue();

      jest.spyOn(queue, 'isEmpty');
      queue.isEmpty();

      expect(queue.isEmpty).toHaveBeenCalled();
      expect(queue.isEmpty).toHaveBeenCalledWith();
    });
  });
});