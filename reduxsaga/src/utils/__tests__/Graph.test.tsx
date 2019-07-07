// Utility Component
import Graph from '../Graph';

describe('Graph Class', () => {
  describe('methods are called', () => {
    it('addNodes method is called', () => {
      const graph = new Graph();

      jest.spyOn(graph, 'addNode');
      graph.addNode('A');

      expect(graph.addNode).toHaveBeenCalled();
      expect(graph.addNode).toHaveBeenCalledWith('A');
    });

    it('addEdge method is called', () => {
      const graph = new Graph();

      jest.spyOn(graph, 'addNode');
      graph.addNode('A');
      graph.addNode('C');

      jest.spyOn(graph, 'addEdge');
      graph.addEdge('A', 'C', 2);

      expect(graph.addEdge).toHaveBeenCalled();
      expect(graph.addEdge).toHaveBeenCalledWith('A', 'C', 2);
    });

    it('findPath method is called', () => {
      const graph = new Graph();

      jest.spyOn(graph, 'addNode');
      graph.addNode('A');
      graph.addNode('C');

      jest.spyOn(graph, 'addEdge');
      graph.addEdge('A', 'C', 2);

      jest.spyOn(graph, 'findPath');
      graph.findPath('A', 'C');

      expect(graph.findPath).toHaveBeenCalled();
      expect(graph.findPath).toHaveBeenCalledWith('A', 'C');
    });
  });

  describe('method adds data to prop', () => {
    it('addNodes method adds data to nodes property', () => {
      const graph = new Graph();

      jest.spyOn(graph, 'addNode');
      graph.addNode('A');

      expect(graph.nodes).toEqual(['A']);
    });
  });
});
